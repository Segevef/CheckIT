import React from "react";
import { Container, Tab, Tabs } from "native-base";
import Dashboard from "../views/Dashboard.js";
import AddCheck from "../views/AddCheck.js";
import Notifications from "../views/Notifications.js";

export default function AppTabs() {
  return (
    <Container>
      <Tabs>
        <Tab heading="הצ'קים שלי">
          <Dashboard />
        </Tab>
        <Tab heading="הוספת צ'ק">
          <AddCheck />
        </Tab>
        <Tab heading="הודעות">
          <Notifications />
        </Tab>
      </Tabs>
    </Container>
  );
}
