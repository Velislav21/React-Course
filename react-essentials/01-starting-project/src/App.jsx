import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {

    const description = reactDescriptions[genRandomInt(2)]

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1 >React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>
    );
}

function CoreConcept({ image, title, description }) {
    return (
        <li>
            <img src={image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

function Nav() {
    return (
        <nav>
            <ul className='nav'>
                <li><a href="#" className='nav-link'>Components</a></li>
                <li><a href="#" className='nav-link'>JSX</a></li>
                <li><a href="#" className='nav-link'>Props</a></li>
                <li><a href="#" className='nav-link'>State</a></li>
            </ul>
        </nav>
    )
}

export default App;