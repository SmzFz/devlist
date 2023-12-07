import "./App.css"  
import CompletedTasks from "./components/CompletedTasks/CompletedTasks"
import CreateNew from "./components/CreateNew/CreateNew"
import Header from "./components/Header/Header"
import Progress from "./components/Progress/Progress"
import TodayTask from "./components/TodayTask/TodayTask"

const App = () => {
  return (
    <>
    <div className="container">
    <Header />
    <section className="content">

    <CreateNew />
    <TodayTask />
    <div  className="divider" />
    <Progress />
    <CompletedTasks />


    </section>
    </div>
    </>
  )
}

export default App