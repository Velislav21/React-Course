import { useState } from 'react'

import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import CoreConcept from './components/CoreConcepts/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

    const [selectedTopic, setSelectedTopic] = useState('')

    function clickHandler(selectedButton) {
        setSelectedTopic(selectedButton);

    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
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
                        <TabButton onSelect={() => clickHandler('components')}>Components</TabButton>
                        <TabButton onSelect={() => clickHandler('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => clickHandler('props')}>Props</TabButton>
                        <TabButton onSelect={() => clickHandler('state')}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}
export default App;