import { useState, useEffect } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import Card from './Component/Card';

const appSettings = {
    databaseURL: "https://realtime-database-99954-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const TravelDB = ref(database, "travelJournal");

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        onValue(TravelDB, (snapshot) => {
            const fetchedData = snapshot.val();
            const dataArray = fetchedData ? Object.keys(fetchedData).map(key => ({
                id: key,
                ...fetchedData[key]
            })) : [];
            setData(dataArray);
        });
    }, []);

    return (
        <div>
            <header>
                <img className="header-img" src="Globe.png" />
                <h3>My Travel Journal</h3>
            </header>

            <section >
                <ul className="card-section">
                    {data.map(item => (
                    
                        <Card key={item.id} item={item} />
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default App;
