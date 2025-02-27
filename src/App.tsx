import { Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Dashboard } from "./pages/dashboard";
import { RegistrationBonus, RegistrationBonusChecker } from "./pages/registration-bonus";
import { TransactionBonus, TransactionBonusChecker } from "./pages/transaction-bonus";
import { TransactionLimits } from "./pages/limits/transaction";
import { TransactionLimitsChecker } from "./pages/limits/transaction/checker";
import { TPRedemption } from "./pages/limits/tp-redemption";
import { OtpLocking } from "./pages/otp-locking";
import { CoolingPeriod } from "./pages/cooling-period";
import { Raffle } from "./pages/raffle";
import { AddRaffle } from "./pages/raffle/add";
import { UpdateRaffle } from "./pages/raffle/update";
import { BonusList } from "./pages/bonus-list";
import { GituConfig } from "./pages/recon/gitu-config";
import { ProCashUpdates } from "./pages/recon/procash";
import Reports from "./pages/reports";
import { ReconciliationReport } from "./pages/reports/reconciliation-report";
import { PaymentTransactionReport } from "./pages/reports/payment-transaction-report";
import { LaasUserRegistrationReport } from "./pages/reports/laas-user-registration-report";
import { PaymentGituReport } from "./pages/reports/payment-gitu-report";
import DeviceDeLinking from "./pages/device-delinking";

import {
  DashboardOutlined,
  GiftOutlined,
  ControlOutlined,
  ReconciliationOutlined,
  TrophyOutlined,
  PercentageOutlined,
  LockOutlined,
  FieldTimeOutlined,
  TeamOutlined,
  DisconnectOutlined,
  IdcardOutlined,
  FileTextOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const siderMenuItems = [
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "/bonus",
    icon: <GiftOutlined />,
    label: "Bonus",
  },
  {
    key: "/recon",
    icon: <ReconciliationOutlined />,
    label: "Recon",
  },
  {
    key: "/raffle",
    icon: <GiftOutlined />,
    label: "Raffle",
  },
  {
    key: "/limits",
    icon: <ControlOutlined />,
    label: "Limits",
  },
  {
    key: "/reports",
    icon: <FileTextOutlined />,
    label: "Reports",
  },
  {
    key: "/rates",
    icon: <PercentageOutlined />,
    label: "% Rates",
  },
  {
    key: "/otp-locking",
    icon: <LockOutlined />,
    label: "Locking",
  },
  {
    key: "/cooling-period",
    icon: <FieldTimeOutlined />,
    label: "Cooling Period",
  },
  {
    key: "/device-delinking",
    icon: <DisconnectOutlined />,
    label: "Device De-linking",
  },
  {
    key: "/biller-subbiller",
    icon: <IdcardOutlined />,
    label: "Biller & Sub Biller ID",
  },
  {
    key: "/roles-rights",
    icon: <TeamOutlined />,
    label: "Roles & Rights",
  },
  {
    key: "/logout",
    icon: <LogoutOutlined />,
    label: "Logout",
  }
];

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={[
                  {
                    name: "dashboard",
                    list: "/dashboard",
                    meta: {
                      label: "Dashboard",
                      icon: <DashboardOutlined />,
                    },
                  },
                  {
                    name: "bonus",
                    list: "/bonus",
                    meta: {
                      label: "Bonus",
                      icon: <GiftOutlined />,
                    },
                  },
                  {
                    name: "recon",
                    list: "/recon",
                    meta: {
                      label: "Recon",
                      icon: <ReconciliationOutlined />,
                    },
                  },
                  {
                    name: "raffle",
                    list: "/raffle",
                    meta: {
                      label: "Raffle",
                      icon: <GiftOutlined />,
                    },
                  },
                  {
                    name: "limits",
                    list: "/limits",
                    meta: {
                      label: "Limits",
                      icon: <ControlOutlined />,
                    },
                  },
                  {
                    name: "reports",
                    list: "/reports",
                    meta: {
                      label: "Reports",
                      icon: <FileTextOutlined />,
                    },
                  },
                  {
                    name: "rates",
                    list: "/rates",
                    meta: {
                      label: "% Rates",
                      icon: <PercentageOutlined />,
                    },
                  },
                  {
                    name: "otp-locking",
                    list: "/otp-locking",
                    meta: {
                      label: "Locking",
                      icon: <LockOutlined />,
                    },
                  },
                  {
                    name: "cooling-period",
                    list: "/cooling-period",
                    meta: {
                      label: "Cooling Period",
                      icon: <FieldTimeOutlined />,
                    },
                  },
                  {
                    name: "device-delinking",
                    list: "/device-delinking",
                    meta: {
                      label: "Device De-linking",
                      icon: <DisconnectOutlined />,
                    },
                  },
                  {
                    name: "biller-subbiller",
                    list: "/biller-subbiller",
                    meta: {
                      label: "Biller & Sub Biller ID",
                      icon: <IdcardOutlined />,
                    },
                  },
                  {
                    name: "roles-rights",
                    list: "/roles-rights",
                    meta: {
                      label: "Roles & Rights",
                      icon: <TeamOutlined />,
                    },
                  },
                  {
                    name: "bonus-list",
                    list: "/bonus/list",
                    meta: {
                      parent: "bonus",
                      label: "List",
                    },
                  },
                  {
                    name: "registration-bonus",
                    list: "/bonus/registration",
                    meta: {
                      parent: "bonus",
                      label: "Registration Bonus",
                    },
                  },
                  {
                    name: "transaction-bonus",
                    list: "/bonus/transaction",
                    meta: {
                      parent: "bonus",
                      label: "Transaction Bonus",
                    },
                  },
                  {
                    name: "transaction-limits",
                    list: "/limits/transaction",
                    meta: {
                      label: "Transaction",
                      parent: "limits",
                    },
                  },
                  {
                    name: "tp-redemption",
                    list: "/limits/tp-redemption",
                    meta: {
                      label: "TP Redemption",
                      parent: "limits",
                    },
                  },
                  {
                    name: "gitu-config",
                    list: "/recon/gitu-config",
                    meta: {
                      label: "GITU Config Updates",
                      parent: "recon",
                    },
                  },
                  {
                    name: "procash",
                    list: "/recon/procash",
                    meta: {
                      label: "ProCash Updates",
                      parent: "recon",
                    },
                  },
                  {
                    name: "global-rates",
                    list: "/rates/global",
                    meta: {
                      label: "Global Rates",
                      parent: "rates",
                    },
                  },
                  {
                    name: "partner-rates",
                    list: "/rates/partner",
                    meta: {
                      label: "Partner Rates",
                      parent: "rates",
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "hAITgm-yg4vV3-sdZEvv",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <ThemedLayoutV2
                        Header={Header}
                        Sider={(props) => (
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          //@ts-ignore
                          <ThemedSiderV2 {...props} items={siderMenuItems} />
                        )}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="dashboard" />}
                    />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/bonus" element={<div>Bonus</div>} />
                    <Route path="/bonus/list" element={<BonusList />} />
                    <Route path="/bonus/registration" element={<RegistrationBonus />} />
                    <Route path="/bonus/registration/maker" element={<RegistrationBonus />} />
                    <Route path="/bonus/registration/checker" element={<RegistrationBonusChecker />} />
                    <Route path="/bonus/transaction" element={<TransactionBonus />} />
                    <Route path="/bonus/transaction/maker" element={<TransactionBonus />} />
                    <Route path="/bonus/transaction/checker" element={<TransactionBonusChecker />} />
                    <Route path="/limits" element={<div>Limits</div>} />
                    <Route
                      path="/limits/transaction"
                      element={<TransactionLimits />}
                    />
                    <Route
                      path="/limits/transaction/checker"
                      element={<TransactionLimitsChecker />}
                    />
                    <Route
                      path="/limits/tp-redemption"
                      element={<TPRedemption />}
                    />
                    <Route path="/recon" element={<div>Recon</div>} />
                    <Route path="/recon/gitu-config" element={<GituConfig />} />
                    <Route path="/recon/procash" element={<ProCashUpdates />} />
                    <Route
                      path="/raffle"
                      element={<Raffle />}
                    />
                    <Route
                      path="/raffle/add"
                      element={<AddRaffle />}
                    />
                    <Route
                      path="/raffle/update/:id"
                      element={<UpdateRaffle />}
                    />
                    <Route path="/rates" element={<div>Rates</div>} />
                    <Route
                      path="/rates/global"
                      element={<div>Global Rates</div>}
                    />
                    <Route
                      path="/rates/partner"
                      element={<div>Partner Rates</div>}
                    />
                    <Route
                      path="/otp-locking"
                      element={<OtpLocking />}
                    />
                    <Route
                      path="/cooling-period"
                      element={<CoolingPeriod />}
                    />
                    <Route
                      path="/roles-rights"
                      element={<div>Roles & Rights</div>}
                    />
                    <Route
                      path="/device-delinking"
                      element={<DeviceDeLinking />}
                    />
                    <Route
                      path="/biller-subbiller"
                      element={<div>Biller Sub-Biller ID</div>}
                    />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/reports/reconciliation-report" element={<ReconciliationReport />} />
                    <Route path="/reports/payment-transaction-report" element={<PaymentTransactionReport />} />
                    <Route path="/reports/laas-user-registration-report" element={<LaasUserRegistrationReport />} />
                    <Route path="/reports/payment-gitu-report" element={<PaymentGituReport />} />
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
