import reactImg from './assets/react-core-concepts.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {

  const description = reactDescriptions[genRandomInt(2)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
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
        <h2>Time to get started!</h2>
        <Nav />
      </main>
    </div>
  );
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