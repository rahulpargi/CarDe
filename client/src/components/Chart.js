import React,{Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react'
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


//need to convert it to functional component
class Chart extends Component{
    render(){
        const options = {
			animationEnabled: true,
			title: {
				text: "Accuracy"
			},
			subtitles: [{
				text: `${this.props.accuracy}%`,
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
					
					{ name: "Accuracy", y: `${this.props.accuracy}` },
					
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
