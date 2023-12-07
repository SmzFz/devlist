import { useContext } from "react"
import styles from "./TodayTask.module.css"
import { AppContext } from "../../AppContent"
import CreateNew from "../CreateNew/CreateNew"
import TaskItem from "../TaskItem/TaskItem"
import Title from "../Title/Title"

const TodayTask = () => {
    const {taskList, progressBarValue} = useContext(AppContext)
  return (
    <div className={styles.container}>
       <Title iconName={"list"} text={"Tarefas de hoje"}/>
       {progressBarValue === 100 || taskList.length === 0 ? (
<span className={styles.todayTaskMessage}>Você não tem tarefas disponiveis</span> 
       ) : (
        <ul className={styles.taskList}>
            {taskList.map(
                (task) => !task.done && <TaskItem key={task.id} task={task} />
            )}

        </ul>
       
       )}
    </div>
  )
}

export default TodayTask