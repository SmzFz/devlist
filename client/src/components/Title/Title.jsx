import styles from "./Title.module.css"

const Title = ({text, iconNome}) => {
    const imgUrl = new URL(`/src/assets/icon-${iconNome}.svg`,import.meta.url).href
  return (
    <div>
        <img src={imgUrl} alt="" />
    </div>
  )
}

export default Title