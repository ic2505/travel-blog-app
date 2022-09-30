import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>This is where the user cards will go.</p>
        <p>
          When you click on a user card, this will direct you to a user's travel
          page.{" "}
        </p>

        <Link className="link" to="/user1">
          user1
        </Link>
      </main>
    </>
  );
}

export default Home;
