"use client";

import { type Operator, calc } from "@/utils/calc";
import Image from "next/image";
import { useState } from "react";
import eelogo from "../public/equal-experts-logo-colour.png";

export default function Home() {
  const [display, setDisplay] = useState(0);
  const [total, setTotal] = useState<number | undefined>(undefined);
  const [operation, setOperation] = useState<Operator | undefined>(undefined);

  const handleOperations = (operator?: Operator) => {
    if (operator) {
      setOperation(operator);

      const amount = total ? calc(display, total, operator) : display;

      setTotal(amount);

      if (amount && total && display) {
        setDisplay(amount);
      } else {
        setDisplay(0);
      }
    } else {
      const amount =
        total && operation ? calc(total, display, operation) : display;

      setTotal(0);
      setDisplay(amount);
    }
  };

  const resetCalc = () => {
    setDisplay(0);
    setTotal(undefined);
    setOperation(undefined);
  };

  return (
    <main className="grid place-items-center">
      <Image width={200} height={200} src={eelogo} alt="equal experts logo" />
      <div className="flex flex-col gap-2 w-96 h-96 p-5">
        <input
          type="number"
          onChange={(e) => setDisplay(Number(e.target.value))}
          value={display}
          className="text-black p-5 text-3xl"
        />
        <div className="grid grid-cols-4 gap-2">
          <div className="grid grid-cols-3 col-span-3 gap-2">
            <button
              className="p-5 border bg-white text-lg text-black font-semibold"
              onClick={(e) =>
                setDisplay((prevValue) => Number(prevValue.toString() + 1))
              }
            >
              1
            </button>
            <button
              className="p-5 border bg-white text-lg text-black font-semibold"
              onClick={(e) =>
                setDisplay((prevValue) => Number(prevValue.toString() + 2))
              }
            >
              2
            </button>
            <button
              className="p-5 border bg-white text-lg text-black font-semibold"
              onClick={(e) =>
                setDisplay((prevValue) => Number(prevValue.toString() + 3))
              }
            >
              3
            </button>
            <button
              className="p-5 border bg-white text-lg text-black font-semibold"
              onClick={(e) =>
                setDisplay((prevValue) => Number(prevValue.toString() + 4))
              }
            >
              4
            </button>
            <button
              className="p-5 border bg-white text-lg text-black font-semibold"
              onClick={(e) =>
                setDisplay((prevValue) => Number(prevValue.toString() + 5))
              }
            >
              5
            </button>
            <button
              className="p-5 border bg-white text-lg text-black font-semibold"
              onClick={(e) =>
                setDisplay((prevValue) => Number(prevValue.toString() + 6))
              }
            >
              6
            </button>
            <button
              className="p-5 border bg-white text-lg text-black font-semibold"
              onClick={(e) =>
                setDisplay((prevValue) => Number(prevValue.toString() + 7))
              }
            >
              7
            </button>
            <button
              className="p-5 border bg-white text-lg text-black font-semibold"
              onClick={(e) =>
                setDisplay((prevValue) => Number(prevValue.toString() + 8))
              }
            >
              8
            </button>
            <button
              className="p-5 border bg-white text-lg text-black font-semibold"
              onClick={(e) =>
                setDisplay((prevValue) => Number(prevValue.toString() + 9))
              }
            >
              9
            </button>
            <button
              className="p-5 border col-start-2 bg-white text-lg text-black font-semibold"
              onClick={(e) =>
                setDisplay((prevValue) => Number(prevValue.toString() + 0))
              }
            >
              0
            </button>
          </div>
          <div className="grid gap-2">
            <button
              className="bg-white text-black p-5 border-none text-lg font-semibold"
              onClick={() => resetCalc()}
            >
              C
            </button>
            <button
              className={`${
                operation === "addition"
                  ? "bg-blue-400 text-black shadow-inner shadow-gray-600"
                  : "bg-white text-black"
              } p-5 border-none text-lg font-semibold`}
              onClick={() => handleOperations("addition")}
            >
              +
            </button>
            <button
              className={`${
                operation === "subtraction"
                  ? "bg-blue-400 text-black shadow-inner shadow-gray-600"
                  : "bg-white text-black"
              } p-5 border-none text-lg font-semibold`}
              onClick={() => handleOperations("subtraction")}
            >
              -
            </button>
            <button
              className={`${
                operation === "multiplication"
                  ? "bg-blue-400 text-black shadow-inner shadow-gray-600"
                  : "bg-white text-black"
              } p-5 border-none text-lg font-semibold`}
              onClick={() => handleOperations("multiplication")}
            >
              *
            </button>
            <button
              className={`${
                operation === "division"
                  ? "bg-blue-400 text-black shadow-inner shadow-gray-600"
                  : "bg-white text-black"
              } p-5 border-none text-lg font-semibold`}
              onClick={() => handleOperations("division")}
            >
              /
            </button>
            <button
              className="bg-white text-black p-5 border-none text-lg font-semibold"
              onClick={() => handleOperations()}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
