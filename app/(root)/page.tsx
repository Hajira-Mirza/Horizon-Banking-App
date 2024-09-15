import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Sonia", lastName: "Mirza", email: "my email" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user= { loggedIn?.firstName || "Guest" }
          subtext="Access and manage your account and transactions."
          />
          <TotalBalanceBox 
          accounts= {[]}
          totalBanks={1}
          totalCurrentBalance={7200.00}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[ { currentBalance: 123.50 }, { currentBalance: 500.50 } ]}/>

    </section>
  );
};

export default Home;
