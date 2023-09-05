import { useEffect } from "react";
import useTimeOut from "./useTimeout";

const useDebounce = (callback: Function, delay: number, dependencies: any) => {
    const { reset, clear } = useTimeOut(callback, delay);

    useEffect(reset, [...dependencies, reset]);
    useEffect(clear, []);
};

export default useDebounce;