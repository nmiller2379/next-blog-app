"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
      <div>
        <label>Search:</label>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            const lowerCaseValue = e.target.value.toLowerCase();
            setSearch(lowerCaseValue);
          }}
        />
        <Link href={`/search/${search}`}>
          <button>Search</button>
        </Link>
      </div>
    </div>
  );
}
