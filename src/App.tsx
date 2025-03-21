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
import { GlobalRates } from "./pages/recon/global-rates";
import Reports from "./pages/reports";
import { ReconciliationReport } from "./pages/reports/reconciliation-report";
import { PaymentTransactionReport } from "./pages/reports/payment-transaction-report";
import { LaasUserRegistrationReport } from "./pages/reports/laas-user-registration-report";
import { PaymentGituReport } from "./pages/reports/payment-gitu-report";
import DeviceDeLinking from "./pages/device-delinking";
import { BillerSubBiller } from "./pages/biller-subbiller";
import { BillerSubBillerProvider } from "./pages/biller-subbiller/provider";
import { BillerSubBillerServiceType } from "./pages/biller-subbiller/service-type";
import { BillerSubBillerUpdate } from "./pages/biller-subbiller/update";
import { RoleManagement } from "./pages/role-management";
import { CreateRole } from "./pages/role-management/create";
import { UserManagement } from "./pages/user-management";
import { AddUser } from "./pages/user-management/add";

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
  UserOutlined,
  SafetyOutlined,
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
    key: "/role-management",
    icon: <SafetyOutlined />,
    label: "Role Management",
  },
  {
    key: "/user-management",
    icon: <UserOutlined />,
    label: "User Management",
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
                    name: "role-management",
                    list: "/role-management",
                    meta: {
                      label: "Role Management",
                      icon: <SafetyOutlined />,
                    },
                  },
                  {
                    name: "user-management",
                    list: "/user-management",
                    meta: {
                      label: "User Management",
                      icon: <UserOutlined />,
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
                    list: "/recon/global-rates",
                    meta: {
                      label: "Global Rates",
                      parent: "recon",
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
                    <Route path="/recon/global-rates" element={<GlobalRates />} />
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
                    <Route
                      path="/otp-locking"
                      element={<OtpLocking />}
                    />
                    <Route
                      path="/cooling-period"
                      element={<CoolingPeriod />}
                    />
                    <Route
                      path="/role-management"
                      element={<RoleManagement />}
                    />
                    <Route
                      path="/role-management/create"
                      element={<CreateRole />}
                    />
                    <Route
                      path="/user-management"
                      element={<UserManagement />}
                    />
                    <Route
                      path="/user-management/add"
                      element={<AddUser />}
                    />
                    <Route
                      path="/device-delinking"
                      element={<DeviceDeLinking />}
                    />
                    <Route
                      path="/biller-subbiller"
                      element={<BillerSubBiller />}
                    />
                    <Route
                      path="/biller-subbiller/provider"
                      element={<BillerSubBillerProvider />}
                    />
                    <Route
                      path="/biller-subbiller/service-type"
                      element={<BillerSubBillerServiceType />}
                    />
                    <Route
                      path="/biller-subbiller/update"
                      element={<BillerSubBillerUpdate />}
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
