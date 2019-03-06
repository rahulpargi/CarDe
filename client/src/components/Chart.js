import React,{Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react'
const CanvasJSChart = CanvasJSReact.CanvasJSChart;



class Chart extends Component{
    render(){
        const options = {
			animationEnabled: true,
			title: {
				text: "Probability Of Prediction"
			},
			subtitles: [{
				text: "85% ",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					
					{ name: "Probability", y: 85 },
					
				]
			}]
		}

        return(
            <div>
                <CanvasJSChart options = {options}
				
			/>
            </div>
        )
    }
}


export default Chart;
