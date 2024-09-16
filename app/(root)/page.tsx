import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user= { loggedIn?.name || "Guest" }
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
