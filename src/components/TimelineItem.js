import React from "react";
import './TimelineItem.css'

class TimelineItem extends React.Component {

    render() {
        const data = this.props.data;
        let height = this.pixel_view_height();
        const dateString = data.date.toLocaleDateString("en-US");
        const tag = data.category && data.category.color && data.category.tag ? <span className="tag" style={{background: data.category.color}}>{data.category.tag}</span> : <div></div>;
        return (
            <div className="timeline-item" style={{height: data.height}}>
                <div className="timeline-item-content">
                    {tag}
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

    pixel_view_height() {
        let body = document.body,
            html = document.documentElement;

        return Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
    }
}

export default TimelineItem;