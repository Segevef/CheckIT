import React from "react";
import { Container, Tab, Tabs } from "native-base";
import Dashboard from "../views/Dashboard.js";
import AddCheck from "../views/AddCheck.js";
import Notifications from "../views/Notifications.js";

export default function AppTabs() {
  return (
    <Container>
      <Tabs>
        <Tab heading="Dashboard">
          <Dashboard />
        </Tab>
        <Tab heading="Add A Check">
          <AddCheck />
        </Tab>
        <Tab heading="Notifications">
          <Notifications />
        </Tab>
      </Tabs>
    </Container>
  );
}
