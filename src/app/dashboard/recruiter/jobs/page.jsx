import { getCompanyJobs } from "@/lib/api/jobs";
import { Table, Chip, Button, Tooltip } from "@heroui/react";
import { Eye, PencilToSquare, TrashBin } from "@gravity-ui/icons";
import { getLoggedInRecruiterCompany } from "@/lib/api/companies";

const RecruiterJobs = async () => {
  const company = await getLoggedInRecruiterCompany();
  const jobs = (await getCompanyJobs(company?._id)) || [];


  const statusColorMap = {
    active: "success",
    paused: "warning",
    closed: "danger",
  };

  return (
    <div className="p-6 container mx-auto px-4 space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-default-800">
          Manage All Jobs
        </h2>
        <p className="text-small text-default-400">
          Resize columns to tailor your view of the job listings.
        </p>
      </div>

      <Table shadow="sm">
        <Table.ResizableContainer>
          <Table.Content
            aria-label="Company jobs with resizable columns"
            className="min-w-200"
          >
            <Table.Header>
              <Table.Column
                isRowHeader
                id="jobTitle"
                defaultWidth="1.5fr"
                minWidth={180}
              >
                Job Title
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column
                id="typeLocation"
                defaultWidth="1.25fr"
                minWidth={160}
              >
                Type & Category
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column
                id="salaryDeadline"
                defaultWidth="1.25fr"
                minWidth={160}
              >
                Location
                <Table.ColumnResizer />
              </Table.Column>

              <Table.Column id="status" defaultWidth="1fr" minWidth={100}>
                Status
                <Table.ColumnResizer />
              </Table.Column>

              {/* Last column doesn't need a resizer handle */}
              <Table.Column
                id="actions"
                defaultWidth="1fr"
                minWidth={130}
                align="center"
              >
                Actions
              </Table.Column>
            </Table.Header>

            <Table.Body
              emptyContent={
                jobs?.length === 0 ? "No jobs found for this company." : null
              }
            >
              {jobs.map((job) => (
                <Table.Row key={job._id?.$oid || job._id}>
                  {/* Job Title */}
                  <Table.Cell>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-small font-semibold capitalize text-default-700 truncate">
                        {job.jobTitle}
                      </span>
                      <span className="text-tiny text-default-400 capitalize truncate">
                        {job.jobCategory}
                      </span>
                    </div>
                  </Table.Cell>

                  {/* Type & Location */}
                  <Table.Cell>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-small capitalize text-default-600 truncate">
                        {job.jobType} {job.isRemote && "• Remote"}
                      </span>
                      <span className="text-tiny text-default-400 truncate">
                        {job.jobCategory}
                      </span>
                    </div>
                  </Table.Cell>

                  {/* Salary & Deadline */}
                  <Table.Cell>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-small text-default-600 font-medium truncate">
                        {job.location}
                      </span>
                    </div>
                  </Table.Cell>

                  {/* Status */}
                  <Table.Cell>
                    <Chip
                      className="capitalize"
                      color={statusColorMap[job.status] || "default"}
                      size="sm"
                      variant="soft" // Using 'soft' to match your reference design style
                    >
                      {job.status}
                    </Chip>
                  </Table.Cell>

                  {/* Actions */}
                  <Table.Cell>
                    <div className="relative flex items-center justify-center gap-2">
                      <Tooltip content="View Details">
                        <Button
                          isIconOnly
                          size="sm"
                          variant="light"
                          aria-label="View job details"
                        >
                          <Eye className="text-default-400 text-lg" />
                        </Button>
                      </Tooltip>

                      <Tooltip content="Edit Job">
                        <Button
                          isIconOnly
                          size="sm"
                          variant="light"
                          color="warning"
                          aria-label="Edit job"
                        >
                          <PencilToSquare className="text-lg" />
                        </Button>
                      </Tooltip>

                      <Tooltip content="Delete Job">
                        <Button
                          isIconOnly
                          size="sm"
                          variant="light"
                          color="danger"
                          aria-label="Delete job"
                        >
                          <TrashBin className="text-lg" />
                        </Button>
                      </Tooltip>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ResizableContainer>
      </Table>
    </div>
  );
};

export default RecruiterJobs;
