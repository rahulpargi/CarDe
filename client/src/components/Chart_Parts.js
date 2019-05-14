import React,{Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react'
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


//need to convert it to functional component
class Chart_Parts extends Component{
    render(){
        const options = {
			animationEnabled: true,
			title: {
				text: "Total Loss prediction"
			},
			subtitles: [{
				text: `${60}%`,
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
					
					{ name: "Total Loss Prediction", y: `${60}` },
					
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


export default Chart_Parts;
