import styles from './banner.module.css'
const Banner = (props) => {
    return (
    <div className={styles.container}>
        <h1 className={styles.titles}><span className={styles.title1}>Coffee </span> 
        <span className={styles.title2}>People</span></h1>
        <p className={styles.subtitle}>Discover coffee shops</p>
        <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
    );
}

export default Banner;