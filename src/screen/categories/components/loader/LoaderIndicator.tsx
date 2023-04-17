import { ActivityIndicator } from "react-native"
import styles from "./Styles"

const LoaderIndicator = () => {
    return (
        <ActivityIndicator style={styles.loader} size={"large"}/>
    )
}

export default LoaderIndicator
