import classes  from './OtherInfo.module.css'

const OtherData = (props) => {
    
    return (
        <div className={classes.card}>
            <h3 className={classes.headline}>{props.info}</h3>
            <h3 className={classes.content}>{props.content}</h3>
        </div>
    );
};

export default OtherData;