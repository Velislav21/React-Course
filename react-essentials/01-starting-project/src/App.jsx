import { useState } from 'react'

import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import CoreConcept from './components/CoreConcepts/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

    const [selectedTopic, setSelectedTopic] = useState('Please click a button')

    function clickHandler(selectedButton) {
        setSelectedTopic(selectedButton);

    }

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
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => clickHandler('Components')}>Components</TabButton>
                        <TabButton onSelect={() => clickHandler('JSX')}>JSX</TabButton>
                        <TabButton onSelect={() => clickHandler('Props')}>Props</TabButton>
                        <TabButton onSelect={() => clickHandler('State')}>State</TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>
                        </h3>
                        <p></p>
                        <pre>
                            <code>

                            </code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}
export default App;