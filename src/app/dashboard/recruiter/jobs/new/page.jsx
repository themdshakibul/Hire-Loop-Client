"use client";

import { useState } from "react";
import {
  Form,
  Fieldset,
  TextField,
  Label,
  Input,
  TextArea,
  Select,
  ListBox,
  FieldError,
  Button,
  Description,
} from "@heroui/react";
import {
  Briefcase,
  DollarSign,
  MapPin,
  CalendarDays,
  Factory,
} from "@gravity-ui/icons";

export default function PostJobForm() {
  const [isRemote, setIsRemote] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Job Posted:", data);
  };

  return (
    <Form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase size={28} />
        <h1 className="text-2xl font-bold">Post a New Job</h1>
      </div>

      {/* Company Info (Auto-filled) */}
      <Fieldset className="bg-surface p-6 rounded-xl border border-border">
        <Fieldset.Legend className="font-semibold text-lg flex items-center gap-2">
          <Factory size={20} /> Company Details
        </Fieldset.Legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <TextField isReadOnly>
            <Label>Company Name</Label>
            <Input value="ZeroWaste Org" />
          </TextField>
          <TextField isReadOnly>
            <Label>Industry</Label>
            <Input value="Social Impact / Technology" />
          </TextField>
        </div>
      </Fieldset>

      {/* Job Info */}
      <Fieldset className="bg-surface p-6 rounded-xl border border-border">
        <Fieldset.Legend className="font-semibold text-lg">
          Job Information
        </Fieldset.Legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <TextField isRequired name="title">
            <Label>Job Title</Label>
            <Input placeholder="e.g. Senior Software Engineer" />
          </TextField>

          <Select name="jobType" isRequired placeholder="Select type">
            <Label>Job Type</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="full-time">Full-time</ListBox.Item>
                <ListBox.Item id="part-time">Part-time</ListBox.Item>
                <ListBox.Item id="contract">Contract</ListBox.Item>
                <ListBox.Item id="internship">Internship</ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <div className="grid grid-cols-2 gap-2">
            <TextField name="salaryMin">
              <Label>Salary Min</Label>
              <Input type="number" placeholder="0" />
            </TextField>
            <TextField name="salaryMax">
              <Label>Salary Max</Label>
              <Input type="number" placeholder="100k" />
            </TextField>
          </div>

          <TextField isRequired name="deadline">
            <Label>Application Deadline</Label>
            <Input type="date" />
          </TextField>
        </div>
      </Fieldset>

      {/* Description Section */}
      <Fieldset className="bg-surface p-6 rounded-xl border border-border">
        <Fieldset.Legend className="font-semibold text-lg">
          Job Description
        </Fieldset.Legend>
        <div className="space-y-4 mt-4">
          <TextField isRequired name="responsibilities">
            <Label>Responsibilities</Label>
            <TextArea placeholder="Describe the main duties..." />
          </TextField>
          <TextField isRequired name="requirements">
            <Label>Requirements</Label>
            <TextArea placeholder="List the skills and experience needed..." />
          </TextField>
          <TextField name="benefits">
            <Label>Benefits (Optional)</Label>
            <TextArea placeholder="Perks, healthcare, remote work..." />
          </TextField>
        </div>
      </Fieldset>

      <div className="flex justify-end gap-4">
        <Button variant="ghost" type="reset">
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Post Job
        </Button>
      </div>
    </Form>
  );
}
