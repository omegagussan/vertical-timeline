import TimelineItem from './TimelineItem';
import './TimelineContainer.css';
import React from "react";

class TimelineContainer extends React.Component{
    render(){
        const sortable_data = this.props.data.map((item) => {
            return ({
                    ...item,
                    date: new Date(item.date)
                }
            );
            }
        );
        const sorted_data = sortable_data.sort(
            (a,b) => (a.date < b.date) ? 1 : ((b.date > a.date) ? -1 : 0)
        );
        const timespan = sorted_data[0].date - sorted_data[sorted_data.length-1].date;
        const augmented_data = this.augment_data_with_heights(sorted_data, timespan);
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

    augment_data_with_heights(sorted_data, timespan) {
        const heights = this.get_heights(sorted_data, timespan);
        let augmented_data = sorted_data.map((e, i) => {
            return ({
                ...e,
                height: heights[i]
            })
        });
        augmented_data[augmented_data.length-1].height = 0;
        return augmented_data;
    }

    get_heights(sorted_data, timespan) {
        const heights = [];
        let time_granularity = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < sorted_data.length - 1; i++) {
            let diff = sorted_data[i + 1].date - sorted_data[i].date;
            let rel_diff = Math.abs(diff / timespan);
            console.log(rel_diff);
            if (rel_diff > 0  && rel_diff < time_granularity) {
                time_granularity = rel_diff;
            }
            heights.push(rel_diff);
        }
        const total_pixel_length = 1/time_granularity * 220;
        return heights.map((h) => h * total_pixel_length);
    }
}

export default TimelineContainer;