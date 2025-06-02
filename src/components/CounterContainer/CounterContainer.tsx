"use client";
import styles from "./Header.module.css";


const CounterContainer = () => {
    const inlineStyles: { [key:string]: React.CSSProperties} = {
        container: {
            display:'flex',
            height:'10rem',
            flexDirection:'column',
            alignItems:'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }
    };
    return(<div style={inlineStyles.container}></div>);
};

export default CounterContainer;