import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/core-concepts/CoreConcepts.jsx';
import Examples from './components/examples/Examples.jsx';

function App() {
    return (
        <>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </>
    );
}
export default App;