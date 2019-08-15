import React from "react";
import './TimelineItem.css'

class TimelineItem extends React.Component {

    render() {
        const data = this.props.data;
        console.log(data);
        let body = document.body,
            html = document.documentElement;

        let height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        console.log(typeof data.date);
        const dateString = data.date.toLocaleDateString("en-US");
        return (
            <div className="timeline-item" style={{height: data.height * height * 0.7}}>
                <div className="timeline-item-content">
                <span className="tag" style={{background: data.category.color}}>
                    {data.category.tag}
                </span>
                    <time>{dateString}</time>
                    <p>{data.text}</p>
                    {data.link && (
                        <a
                            href={data.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.link.text}
                        </a>
                    )}
                    <span className="circle"/>
                 </div>
            </div>);
    }
}

export default TimelineItem;