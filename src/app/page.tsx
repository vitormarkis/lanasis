"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableCellEditable,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useState } from "react";
import st from "./page.module.css";

export default function Home() {
  const [text, setText] = useState("Vitor");
  const [clicks, setClicks] = useState("200");
  const [conversions, setConversions] = useState("20");

  const [text2, setText2] = useState("");
  const [clicks2, setClicks2] = useState("");
  const [conversions2, setConversions2] = useState("");

  return (
    <div className="h-screen p-11 grid place-items-center">
      <Table
        className={cn(
          "bg-background text-color border overflow-hidden",
          st.table
        )}
      >
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Cliques</TableHead>
            <TableHead className="text-right">Conversões</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">0001</TableCell>
            <TableCellEditable state={[text, setText]} />
            <TableCellEditable state={[clicks, setClicks]} />
            <TableCellEditable
              state={[conversions, setConversions]}
              className="text-right"
            />
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">0001</TableCell>
            <TableCellEditable state={[text2, setText2]} />
            <TableCellEditable state={[clicks2, setClicks2]} />
            <TableCellEditable
              state={[conversions2, setConversions2]}
              className="text-right"
            />
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
