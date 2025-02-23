import Navbar from "./components/navigation/Nav-bar"
import Table from "./components/table/Table"
import './styles.css'
import Footer from './components/footer/Footer'
function App() {

    return (
        <>
            <Navbar />
            <main className="main">
                <section className="todo-list-container">

                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn">+ Add new Todo</button>
                    </div>

                    <Table />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
