import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import Axios from 'axios';

function Ads() {
    return (
        <div>
            <h1>Ads Page</h1>
            <p>This is the boilerplate for the Ads page.</p>
        </div>
    );
};

export default Ads;