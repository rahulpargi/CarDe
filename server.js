const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const withAuth = require("./middleware");
const multer = require("multer");
const axios = require("axios");
const slash = require("slash");
const mongoose = require("mongoose");
const mongo_uri = "mongodb://localhost:27017/cardeeb";
const secret = "secret";
const uuidv4 = require("uuid/v4");
const fs = require("fs");

//Database Connection
mongoose.connect(mongo_uri, function(err) {
  if (err) {
    throw err;
  } else {
    console.log("Connected to database");
  }
});

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("destination");
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, newFilename);
  }
});

const upload = multer({ storage: fileStorage });

//Middlewares
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: "false" }));
// app.use(multer({storage:fileStorage, fileFilter}).single('selectedImage'))
app.use(express.static(path.join(__dirname, "/client/build")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//POST Router to register user
app.post("/api/register", function(req, res) {
  //

  console.log(req.body);
  const {
    claim_adjustor_id,
    adjustorfirstname,
    adjustorlastname,
    adjustoremail,
    adjustorphone,
    admin,
    company_id,
    adjustor_username,
    adjustor_password
  } = req.body;
  const user = new User({
    claim_adjustor_id,
    adjustorfirstname,
    adjustorlastname,
    adjustoremail,
    adjustorphone,
    admin,
    company_id,
    adjustor_username,
    adjustor_password
  });
  user.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error Registering new Adjustor please try again");
    } else {
      res.status(200).send("Welcome you have successfully registered");
    }
  });
});

app.post("/api/authenticate", function(req, res) {
  const { adjustoremail, adjustor_password } = req.body;
  //console.log(adjustoremail,adjustor_password)

  User.findOne({ adjustoremail }, function(err, user) {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Internal error finding  please try again" });
    } else if (!user) {
      res.status(401).json({
        error: "Incorrect Email or Password"
      });
    } else {
      user.isCorrectPassword(adjustor_password, function(err, same) {
        if (err) {
          console.log(err);
          res.status(500).json({
            error: "Internal error please try again"
          });
          console.log("inside---------------------------");
        } else if (!same) {
          res.status(401).json({
            error: "Incorrect Email or Password"
          });
        } else {
          //Issue Token
          console.log("inside---------------------------ss");
          const payload = { adjustoremail };
          const token = jwt.sign(payload, secret, {
            expiresIn: 60 * 60
          });
          res.cookie("token", token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

app.post("/api/create", withAuth, upload.single("selectedImage"), function(
  req,
  res
) {
  console.log("email", req.adjustoremail);
  let {
    claim_reference_no,
    vin_number,
    make,
    year,
    image_name,
    image_type,
    date_uploaded,
    damaged_parts,
    severity_of_damage,
    accuracy
  } = req.body;

  const imagePath = slash(req.file.path);
  console.log(
    claim_reference_no,
    vin_number,
    make,
    year,
    image_name,
    image_type,
    date_uploaded,
    damaged_parts,
    severity_of_damage,
    accuracy,
    imagePath
  );
  console.log(accuracy);
  const imgbytes = new Buffer(fs.readFileSync(req.file.path)).toString(
    "base64"
  );
  axios
    .post("http://52.173.191.180:4000/Upload", {
      imgname: image_name,
      imagbytes: imgbytes
    })
    .then(result => {
      if (result.status === 200) {
        damaged_parts = result.data.damage_affected_parts;
        severity_of_damage = result.data.assessment;

        //saving data
        User.findOne({ adjustoremail: req.adjustoremail }, function(err, user) {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ error: "Internal error finding  please try again" });
          } else if (!user) {
            res.status(401).json({
              error: "Incorrect Email or Password"
            });
          } else {
            console.log(date_uploaded);
            let user = new User({
              claim_reference_no,
              vin_number,
              make,
              year,
              image_name,
              image_type,
              date_uploaded,
              damaged_parts,
              severity_of_damage,
              accuracy,
              imagePath
            });
            console.log(accuracy);
            User.findOneAndUpdate(
              { adjustoremail: req.adjustoremail },
              {
                $push: {
                  images: {
                    claim_reference_no,
                    vin_number,
                    make,
                    year,
                    image_name,
                    image_type,
                    date_uploaded,
                    damaged_parts,
                    severity_of_damage,
                    accuracy,
                    imagePath
                  }
                }
              },
              function(err, model) {
                if (err) {
                  console.log(err);
                  res.status(500).send("Error ");
                } else {
                  console.log("saved");
                  console.log(model);
                  res.status(200).json({
                    damaged_parts: damaged_parts,
                    severity_of_damage: severity_of_damage,
                    accuracy: accuracy
                  });
                }
              }
            );
          }
        });
      } else {
        res
          .status(500)
          .json({ error: "Internal error finding  please try again" });
      }
    })
    .catch(function(err) {
      console.log(err);
    });
});

app.get("/api/claim/edit/:id", withAuth, (req, res, next) => {
  console.log("dadadadad" + req.params.id);
  User.findOne(
    { adjustoremail: req.adjustoremail },
    { images: { $elemMatch: { _id: req.params.id } } },
    function(err, user) {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ error: "Internal error finding  please try again" });
      } else if (!user) {
        res.status(401).json({
          error: "Incorrect Email or Password"
        });
      } else {
        console.log(user);
        res.status(200).json({
          user
        });
      }
    }
  );
});
//post edit claims

app.put(
  "/api/claim/edit/:id",
 
  withAuth,
  upload.single("selectedImage"),
  (req, res, next) => {
    let {
      claim_reference_no,
      vin_number,
      make,
      year,
      image_name,
      image_type,
      date_uploaded,
      damaged_parts,
      severity_of_damage,
      accuracy
    } = req.body;
    const imagePath = slash(req.file.path);
    const imgbytes = new Buffer(fs.readFileSync(req.file.path)).toString(
      "base64"
    );
      console.log(imagePath,imgbytes);
    axios
      .post("http://52.173.191.180:4000/Upload", {
        imgname: image_name,
        imagbytes: imgbytes
      })
      .then(result => {
         console.log(result)
        if (result.status === 200) {
          damaged_parts = result.data.damage_affected_parts;
          severity_of_damage = result.data.assessment;

          
              
              // User.findByIdAndUpdate(
              //   { adjustoremail: req.adjustoremail },
              //   { images: { $elemMatch: { _id: req.params.id } } },
              //   {
              //     $set: {
              //       "images.$.claim_reference_no": req.body.claim_reference_no,
              //       "images.$.vin_number": req.body.vin_number,
              //       "images.$.make": req.body.make,
              //       "images.$.year": req.body.year,
              //       "images.$.image_name": req.body.image_name,
              //       "images.$.image_type": req.body.image_type,
              //       "images.$.date_uploaded": req.body.date_uploaded,
              //       "images.$.damaged_parts": req.body.damaged_parts,
              //       "images.$.severity_of_damage": req.body.severity_of_damage,
              //       "images.$.accuracy": req.body.accuracy,
              //       "images.$.imagePath": req.body.imagePath
              //     }
              //   },
              //   function(err, model) {
              //     if (err) {
              //      // console.log(err);
              //       res.status(500).send("Error ");
              //     } else {
              //       console.log("saved");
              //       console.log(model);
              //       res.status(200).json({
              //         damaged_parts: damaged_parts,
              //         severity_of_damage: severity_of_damage,
              //         accuracy: accuracy
              //       });
              //     }
              //   }
              // );
           
              res.status(200).json({
                        damaged_parts: damaged_parts,
                        severity_of_damage: severity_of_damage,
                        accuracy: accuracy
                      });
        } else {
          res
            .status(500)
            .json({ error: "Internal error finding  please try again" });
        }
      })
      .catch(function(err) {
        console.log(err);
      });

    // User.findOneAndUpdate(
    //   { adjustoremail: req.adjustoremail },
    //   { images: { $elemMatch: { _id: "5ca7bb485ed30c0a24c94df9" } } },
    //   (err, user) => {
    //     if (err) throw err;
    //     else if (!user) {
    //       res.status(500).send("No User Found Try Again");
    //     } else {
    //       res.status(200).send({ user: user });
    //     }
    //   }
    // );
  }
);

app.get("/api/profile", withAuth, function(req, res) {
  User.findOne({ adjustoremail: req.adjustoremail }, function(err, user) {
    if (err) throw err;
    else if (!user) {
      res.status(500).send("No User Found Try Again");
    } else {
      console.log(user.adjustor_username);
      res
        .status(200)
        .json({ data: user.images, claimadjustor: user.adjustor_username });
    }
  });
});

//Search

app.get('/api/test',withAuth,(req,res,next)=>{
    User.findOne(
        { adjustoremail: req.adjustoremail },
        { images: { $elemMatch: { _id: "5ca647004dace14464232f6a" } } },
        function(err, model) {
          if (err) {
            console.log(err);
            res.status(500).send("Error ");
          } else {
            res.status(200).json({model})
          }
        }
      );
})

app.get("/api/search/:query", withAuth, function(req, res) {
  const email = req.adjustoremail;
});
app.get("/api/view", withAuth, function(req, res) {
  const email = req.adjustoremail;
  User.findOne({ adjustoremail: req.adjustoremail }, function(err, user) {
    if (err) throw err;
    else if (!user) {
      res.status(500).send("No User Found Try Again");
    } else {
      // res.json(user);
      res.status(200).send({ user1: user.adjustor_username });
    }
  });
});
app.get("/api/create", withAuth, function(req, res) {
  User.findOne({ adjustoremail: req.adjustoremail }, function(err, user) {
    if (err) throw err;
    else if (!user) {
      res.status(500).send("No User Found Try Again");
    } else {
      // res.json(user);
      res.status(200).send({ user1: user.adjustor_username });
    }
  });
});

//error handler
app.use((err, req, res, next) => {
  //set locals, proving error only in development

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  //render error page
  res.status(err.status || 500);
  //res.render('error');
});

//Checking authentication for front end
app.get("/checkToken", withAuth, function(req, res) {
  res.sendStatus(200);
});
app.get("/logout", function(req, res) {
  let cookie = req.cookies;
  res.clearCookie("cookie.token");

  res.sendStatus(200);
});

//Error handling
app.get("*", function(req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "/client/build") });
});

module.exports = app;
