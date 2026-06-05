"use client";

import React, { useState, useRef } from "react";
import {
  Form,
  Fieldset,
  TextField,
  Label,
  Input,
  Select,
  ListBox,
  TextArea,
  Button,
} from "@heroui/react";
import Image from "next/image";
import {
  ArrowUpToLine,
  Factory,
  Globe,
  Layers,
  Pencil,
  PersonFill,
  Text,
} from "@gravity-ui/icons";
import Link from "next/link";

// Shared custom tailwind styles to mimic the dark theme mock
const textInputClass =
  "w-full bg-[#1c1c1e] text-zinc-200 border border-zinc-800 rounded-lg px-3 py-2.5 focus:outline-none focus:border-zinc-600 placeholder:text-zinc-600 transition-colors text-sm";
const textAreaClass =
  "w-full bg-[#1c1c1e] text-zinc-200 border border-zinc-800 rounded-lg px-3 py-2.5 focus:outline-none focus:border-zinc-600 placeholder:text-zinc-600 transition-colors text-sm resize-none";
const selectBoxClass = "w-full flex flex-col gap-1";
const triggerClasses =
  "w-full flex items-center justify-between bg-[#1c1c1e] text-zinc-200 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm cursor-pointer focus:outline-none focus:border-zinc-600";
const popoverClasses =
  "bg-[#1c1c1e] border border-zinc-800 rounded-lg shadow-xl p-1 min-w-[200px]";
const listItemClasses =
  "text-zinc-300 hover:bg-zinc-800 px-3 py-2 rounded-md text-sm cursor-pointer outline-none data-[selected=true]:bg-zinc-700 transition-colors";

export default function CompanyManager() {
  // --- STATE ---
  const [company, setCompany] = useState(null); // Mock DB state. null = not registered
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedLogoUrl, setUploadedLogoUrl] = useState("");

  const fileInputRef = useRef(null);

  // --- IMGBB UPLOAD HANDLER ---
  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Optional quick client validation
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        logo: "Image size must be less than 5MB",
      }));
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      // Replace with your real process.env.NEXT_PUBLIC_IMGBB_API_KEY
      const apiKey = "YOUR_IMGBB_API_KEY";
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const resData = await response.json();
      if (resData.success) {
        setUploadedLogoUrl(resData.data.url);
        setErrors((prev) => ({ ...prev, logo: null }));
      } else {
        setErrors((prev) => ({ ...prev, logo: "Upload failed. Try again." }));
      }
    } catch (err) {
      setErrors((prev) => ({ ...prev, logo: "Network error during upload" }));
    } finally {
      setIsUploading(false);
    }
  };

  // --- FORM SUBMISSION ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const companyName = formData.get("companyName");
    const industry = formData.get("industry");
    const websiteUrl = formData.get("websiteUrl");
    const location = formData.get("location");
    const employeeCount = formData.get("employeeCount");
    const description = formData.get("description");

    // Simple validation schema matching design scope
    const newErrors = {};
    if (!companyName) newErrors.companyName = "Company name is required";
    if (!industry) newErrors.industry = "Please select an industry";
    if (!websiteUrl) newErrors.websiteUrl = "Website URL is required";
    if (!location) newErrors.location = "Location is required";
    if (!employeeCount) newErrors.employeeCount = "Select employee scale";
    if (!uploadedLogoUrl && !company?.logo) newErrors.logo = "Logo is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Structure finalized data for database save operation
    const updatedCompanyData = {
      name: companyName,
      industry,
      websiteUrl,
      location,
      employeeCount,
      description,
      logo: uploadedLogoUrl || company?.logo,
      status: company?.status || "Pending", // Mock initial status set by administrator
    };

    setCompany(updatedCompanyData);
    setIsEditing(false);
    setUploadedLogoUrl("");
  };

  // --- RENDERS ---

  // VIEW 1: Prompt view when no corporate entity exists
  if (!company && !isEditing) {
    return (
      <div className="max-w-2xl mx-auto my-12 bg-[#121214] border border-zinc-900 rounded-xl p-8 text-center flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-400">
          <Factory size={28} />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-zinc-200">
            No Registered Company
          </h3>
          <p className="text-sm text-zinc-500 max-w-sm">
            To unlock structural configurations, post listings, and track
            applications, set up your organizational profile.
          </p>
        </div>
        <Button
          onClick={() => setIsEditing(true)}
          className="bg-white text-black font-semibold hover:bg-zinc-200 rounded-lg px-6 mt-2 transition-colors h-11"
        >
          Register Company
        </Button>
      </div>
    );
  }

  // VIEW 2: Informative Data Display layout (with Approval Status Badge indicators)
  if (company && !isEditing) {
    const statusColors = {
      Pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      Approved: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      Rejected: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    };

    return (
      <div className="max-w-3xl mx-auto my-8 bg-[#0c0c0e] border border-zinc-900 rounded-xl p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
          <div className="flex items-center gap-4">
            {company.logo ? (
              <Image
                width={300}
                height={300}
                src={company.logo}
                alt="Company logo"
                className="w-16 h-16 object-cover rounded-xl border border-zinc-800 bg-[#1c1c1e]"
              />
            ) : (
              <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                <Factory size={24} />
              </div>
            )}
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold text-white">
                  {company.name}
                </h2>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${statusColors[company.status] || statusColors.Pending}`}
                >
                  {company.status}
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-0.5 flex items-center gap-1.5">
                <Layers size={14} /> {company.industry}
              </p>
            </div>
          </div>
          <Button
            onClick={() => {
              setUploadedLogoUrl(company.logo);
              setIsEditing(true);
            }}
            variant="bordered"
            className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 rounded-lg px-4 text-sm font-medium h-10 flex items-center gap-2"
          >
            <Pencil size={14} /> Edit Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Link size={16} className="text-zinc-500 mt-0.5" />
              <div>
                <span className="block text-zinc-500 font-medium text-xs uppercase tracking-wider">
                  Website URL
                </span>
                <a
                  href={company.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline mt-0.5 block break-all"
                >
                  {company.websiteUrl}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe size={16} className="text-zinc-500 mt-0.5" />
              <div>
                <span className="block text-zinc-500 font-medium text-xs uppercase tracking-wider">
                  Location
                </span>
                <span className="text-zinc-300 mt-0.5 block">
                  {company.location}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <PersonFill size={16} className="text-zinc-500 mt-0.5" />
              <div>
                <span className="block text-zinc-500 font-medium text-xs uppercase tracking-wider">
                  Employee Range
                </span>
                <span className="text-zinc-300 mt-0.5 block">
                  {company.employeeCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {company.description && (
          <div className="pt-4 border-t border-zinc-900 space-y-2">
            <span className="flex items-center gap-2 text-zinc-500 font-medium text-xs uppercase tracking-wider">
              <Text size={14} /> Brief Description
            </span>
            <p className="text-sm text-zinc-400 leading-relaxed bg-[#121214] p-4 rounded-lg border border-zinc-900 whitespace-pre-wrap">
              {company.description}
            </p>
          </div>
        )}
      </div>
    );
  }

  // VIEW 3: Management Submission & Mutation Form (Matches Mock UI aesthetics precisely)
  return (
    <div className="max-w-3xl mx-auto my-8 bg-[#0c0c0e] border border-zinc-900 rounded-xl p-8">
      <Form
        onSubmit={handleSubmit}
        className="space-y-8"
        validationErrors={errors}
        validationBehavior="aria"
      >
        <Fieldset className="space-y-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Name */}
            <TextField
              name="companyName"
              isInvalid={!!errors.companyName}
              defaultValue={company?.name}
              className="flex flex-col gap-1 w-full"
            >
              <Label className="text-zinc-400 font-medium text-sm">
                Company Name
              </Label>
              <Input placeholder="e.g. Acme Corp" className={textInputClass} />
              {errors.companyName && (
                <span className="text-xs text-danger mt-1">
                  {errors.companyName}
                </span>
              )}
            </TextField>

            {/* Industry Category Dropdown */}
            <Select
              className={selectBoxClass}
              name="industry"
              isInvalid={!!errors.industry}
              defaultSelectedKeys={
                company?.industry ? [company.industry] : undefined
              }
            >
              <Label className="text-zinc-400 font-medium text-sm mb-1 block">
                Industry / Category
              </Label>
              <Select.Trigger className={triggerClasses}>
                <Select.Value className="text-white placeholder:text-zinc-600" />
                <Select.Indicator />
              </Select.Trigger>
              {errors.industry && (
                <span className="text-xs text-danger mt-1">
                  {errors.industry}
                </span>
              )}
              <Select.Popover className={popoverClasses}>
                <ListBox className="outline-none">
                  {[
                    "Technology",
                    "Design",
                    "Marketing",
                    "Sales",
                    "Healthcare",
                    "Finance",
                  ].map((ind) => (
                    <ListBox.Item
                      key={ind}
                      id={ind}
                      className={listItemClasses}
                      textValue={ind}
                    >
                      {ind}
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Website URL Field */}
            <TextField
              name="websiteUrl"
              isInvalid={!!errors.websiteUrl}
              defaultValue={company?.websiteUrl}
              className="flex flex-col gap-1 w-full"
            >
              <Label className="text-zinc-400 font-medium text-sm">
                Website URL
              </Label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-zinc-600 text-sm pointer-events-none z-10 select-none">
                  https://
                </span>
                <Input
                  placeholder="www.company.com"
                  className={`${textInputClass} pl-16`}
                />
              </div>
              {errors.websiteUrl && (
                <span className="text-xs text-danger mt-1">
                  {errors.websiteUrl}
                </span>
              )}
            </TextField>

            {/* Geographic Hub Location Input */}
            <TextField
              name="location"
              isInvalid={!!errors.location}
              defaultValue={company?.location}
              className="flex flex-col gap-1 w-full"
            >
              <Label className="text-zinc-400 font-medium text-sm">
                Location
              </Label>
              <div className="relative flex items-center">
                <Globe
                  size={16}
                  className="absolute left-3 text-zinc-600 pointer-events-none z-10"
                />
                <Input
                  placeholder="City, Country"
                  className={`${textInputClass} pl-10`}
                />
              </div>
              {errors.location && (
                <span className="text-xs text-danger mt-1">
                  {errors.location}
                </span>
              )}
            </TextField>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Employee Operational Scale Count */}
            <Select
              className={selectBoxClass}
              name="employeeCount"
              isInvalid={!!errors.employeeCount}
              defaultSelectedKeys={
                company?.employeeCount
                  ? [company.employeeCount]
                  : ["1-10 employees"]
              }
            >
              <Label className="text-zinc-400 font-medium text-sm mb-1 block">
                Employee Count Range
              </Label>
              <Select.Trigger className={triggerClasses}>
                <Select.Value className="text-white" />
                <Select.Indicator />
              </Select.Trigger>
              {errors.employeeCount && (
                <span className="text-xs text-danger mt-1">
                  {errors.employeeCount}
                </span>
              )}
              <Select.Popover className={popoverClasses}>
                <ListBox className="outline-none">
                  {[
                    "1-10 employees",
                    "11-50 employees",
                    "51-200 employees",
                    "201-500 employees",
                    "500+ employees",
                  ].map((range) => (
                    <ListBox.Item
                      key={range}
                      id={range}
                      className={listItemClasses}
                      textValue={range}
                    >
                      {range}
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Logo Custom File Upload Box Container Setup with Embedded Preview */}
            <div className="flex flex-col gap-1 w-full">
              <span className="text-zinc-400 font-medium text-sm mb-1 block">
                Company Logo
              </span>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleLogoUpload}
                className="hidden"
              />

              <div
                onClick={() => !isUploading && fileInputRef.current?.click()}
                className={`flex items-center gap-4 p-3 bg-[#1c1c1e] border-2 border-dashed border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700 transition-all ${isUploading ? "opacity-50 pointer-events-none" : ""}`}
              >
                <div className="w-11 h-11 bg-[#121214] rounded-md border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 overflow-hidden">
                  {uploadedLogoUrl ? (
                    <Image
                      width={200}
                      height={200}
                      src={uploadedLogoUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ArrowUpToLine size={18} />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-sm text-zinc-300 font-medium">
                    {isUploading
                      ? "Uploading file..."
                      : uploadedLogoUrl
                        ? "Change custom logo image"
                        : "Upload image"}
                  </p>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    PNG, JPG up to 5MB
                  </p>
                </div>
              </div>
              {errors.logo && (
                <span className="text-xs text-danger mt-2 block">
                  {errors.logo}
                </span>
              )}
            </div>
          </div>

          {/* Core Corporate Narrative Brief Textarea Textbox */}
          <TextField
            name="description"
            defaultValue={company?.description}
            className="flex flex-col gap-1 w-full"
          >
            <Label className="text-zinc-400 font-medium text-sm">
              Brief Description
            </Label>
            <TextArea
              placeholder="Tell us about your company's mission and culture..."
              rows={4}
              className={textAreaClass}
            />
          </TextField>
        </Fieldset>

        {/* Action Controls Footer Row */}
        <div className="flex justify-end gap-3 pt-4 border-t border-zinc-900 w-full">
          <Button
            type="button"
            variant="bordered"
            onClick={() => {
              setIsEditing(false);
              setErrors({});
              setUploadedLogoUrl("");
            }}
            className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 rounded-lg px-6 font-medium h-11"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-white text-black font-semibold hover:bg-zinc-200 rounded-lg px-6 transition-colors h-11"
          >
            {company ? "Save Profile" : "Register Profile"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
