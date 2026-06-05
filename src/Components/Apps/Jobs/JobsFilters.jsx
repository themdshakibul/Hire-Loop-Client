"use client";

import React, { useState, useEffect } from "react";
import { InputGroup, TextField, Label, Select, ListBox } from "@heroui/react";

export default function JobsFilters({ onFilterChange }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [workMode, setWorkMode] = useState("");

  // Trigger search filtering instantly when select keys change
  const handleSelectUpdate = (type, value) => {
    const filters = { search, category, jobType, workMode };

    if (type === "category") {
      filters.category = value;
      setCategory(value);
    }
    if (type === "jobType") {
      filters.jobType = value;
      setJobType(value);
    }
    if (type === "workMode") {
      filters.workMode = value;
      setWorkMode(value);
    }

    onFilterChange(filters);
  };

  // Debounce text search by 300ms so typing feels completely smooth
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onFilterChange({ search, category, jobType, workMode });
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [category, jobType, onFilterChange, search, workMode]);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-end bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-white">
      {/* 1. SEARCH INPUT */}
      <div className="w-full md:flex-1">
        <TextField>
          <Label className="text-zinc-300 text-sm mb-1 block">
            Search Jobs
          </Label>
          <InputGroup className="bg-zinc-900 border border-zinc-700 rounded-lg text-white">
            <InputGroup.Prefix className="pl-3 text-zinc-500">
              🔍
            </InputGroup.Prefix>
            <InputGroup.Input
              placeholder="Search by title or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-white placeholder-zinc-500 focus:outline-none py-2 px-2 w-full"
            />
          </InputGroup>
        </TextField>
      </div>

      {/* 2. JOB CATEGORY FILTER */}
      <div className="w-48">
        <Select
          className="w-48"
          placeholder="All Categories"
          selectedKey={category}
          onSelectionChange={(val) => handleSelectUpdate("category", val)}
        >
          <Label className="text-zinc-300 text-sm mb-1 block">Category</Label>
          <Select.Trigger className="bg-zinc-900 border border-zinc-700 rounded-lg p-2 flex justify-between items-center w-full text-left text-zinc-200 hover:border-zinc-500 transition-colors">
            <Select.Value />
            <Select.Indicator className="text-zinc-400" />
          </Select.Trigger>
          <Select.Popover className="w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl mt-1 text-zinc-200">
            <ListBox className="p-1">
              <ListBox.Item
                id=""
                textValue="All Categories"
                className="hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors block text-zinc-200"
              >
                All Categories
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id="Engineering"
                textValue="Engineering"
                className="hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors block text-zinc-200"
              >
                Engineering
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id="Design"
                textValue="Design"
                className="hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors block text-zinc-200"
              >
                Design
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id="Marketing"
                textValue="Marketing"
                className="hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors block text-zinc-200"
              >
                Marketing
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      {/* 3. JOB TYPE FILTER */}
      <div className="w-44">
        <Select
          className="w-44"
          placeholder="All Types"
          selectedKey={jobType}
          onSelectionChange={(val) => handleSelectUpdate("jobType", val)}
        >
          <Label className="text-zinc-300 text-sm mb-1 block">Job Type</Label>
          <Select.Trigger className="bg-zinc-900 border border-zinc-700 rounded-lg p-2 flex justify-between items-center w-full text-left text-zinc-200 hover:border-zinc-500 transition-colors">
            <Select.Value />
            <Select.Indicator className="text-zinc-400" />
          </Select.Trigger>
          <Select.Popover className="w-44 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl mt-1 text-zinc-200">
            <ListBox className="p-1">
              <ListBox.Item
                id=""
                textValue="All Types"
                className="hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors block text-zinc-200"
              >
                All Types
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id="full-time"
                textValue="Full-time"
                className="hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors block text-zinc-200"
              >
                Full-time
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id="part-time"
                textValue="Part-time"
                className="hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors block text-zinc-200"
              >
                Part-time
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id="contract"
                textValue="Contract"
                className="hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors block text-zinc-200"
              >
                Contract
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      {/* 4. WORK MODE FILTER */}
      <div className="w-40">
        <Select
          className="w-40"
          placeholder="All Modes"
          selectedKey={workMode}
          onSelectionChange={(val) => handleSelectUpdate("workMode", val)}
        >
          <Label className="text-zinc-300 text-sm mb-1 block">Work Mode</Label>
          <Select.Trigger className="bg-zinc-900 border border-zinc-700 rounded-lg p-2 flex justify-between items-center w-full text-left text-zinc-200 hover:border-zinc-500 transition-colors">
            <Select.Value />
            <Select.Indicator className="text-zinc-400" />
          </Select.Trigger>
          <Select.Popover className="w-40 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl mt-1 text-white">
            <ListBox className="p-1">
              <ListBox.Item
                id=""
                textValue="All Modes"
                className="hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors block text-zinc-200"
              >
                All Modes
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id="remote"
                textValue="Remote"
                className="hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors block text-zinc-200"
              >
                Remote
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item
                id="onsite"
                textValue="On-site"
                className="hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors block text-zinc-200"
              >
                On-site
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>
  );
}
