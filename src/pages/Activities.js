import { useContext } from "react";
import PageHeader from "../components/PageHeader";
import { UserContext } from "../contexts/UserContext";

const Activities = () => {

    const { user } = useContext(UserContext);

    return (
        <>
            <PageHeader heading="aktiviteter" />
            <p>{user && user.role}</p>
        </>
    );
}

export default Activities;