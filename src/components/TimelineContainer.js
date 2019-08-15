import TimelineItem from './TimelineItem';
import './TimelineContainer.css';
import React from "react";

class TimelineContainer extends React.Component{
    render(){
        const sortable_data = this.props.data.map((item) => {
            return ({
                    ...item,
                    date: Date.parse(item.date)
                }
            );
            }
        );
        const sorted_data = sortable_data.sort(
            (a,b) => (a.date < b.date) ? 1 : ((b.date > a.date) ? -1 : 0)
        ).reverse();
        const timespan = sorted_data[0].date - sorted_data[sorted_data.length-1].date;
        const heights = []
        for (let i = 0; i < sorted_data.length -1; i++){
            let diff = sorted_data[i+1].date - sorted_data[i].date;
            let rel_diff = Math.abs(diff/timespan);
            heights.push(rel_diff);
        }
        const augmented_data = sorted_data.map((e, i) => {
            return ({...e,
                height: heights[i]
            })
        });
        console.log(augmented_data);
        const Timeline = () =>
            augmented_data.length > 0 && (
                <div className="timeline-container">
                    {augmented_data.map((data, idx) => (
                        <TimelineItem data={data} key={idx} />
                    ))}
                </div>
            );
        return(<Timeline/>)
    }


}


export default TimelineContainer;