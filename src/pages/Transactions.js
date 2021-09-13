import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "parts/Sidebar";

import formatThousand from "helpers/formatThousand";
import formatDate from "helpers/formatDate";

import orders from "constants/api/orders";

import Loading from "parts/Loading";
import Congratulation from "parts/Congratulation";
import EmptyState from "parts/EmptyState";

import { statusOrders, fetchOrders, messageOrder } from "store/actions/orders";

function Transactions() {
  return <div></div>;
}

export default Transactions;
