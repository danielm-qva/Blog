import { ReactNode } from "react";
import { useSelector } from "react-redux";

import NotAutorizations from "./not_autorization";

function ProtectRouter({ children }: { children: ReactNode }) {

    const islogin = useSelector((store: any) => store.app.statusLogin)

    return islogin ? children : <NotAutorizations />
}

export default ProtectRouter;
