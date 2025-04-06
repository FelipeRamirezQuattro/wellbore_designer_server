export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
};

export const MODULES = {
  ORDER: "xafText.Module.xaftest.Order",
  ITEM: "xafText.Module.xaftest.Item",
  ORDER_LINE: "xafText.Module.xaftest.OrderLine",
  USER: "DevExpress.ExpressApp.Security.Strategy.SecuritySystemUser",
  ROLE: "DevExpress.ExpressApp.Security.Strategy.SecuritySystemRole",
};

export const ACTIONS = {
  ALLOWREAD: "AllowRead", // List Detail
  ALLOWWRITE: "AllowWrite", // Update
  ALLOWCREATE: "AllowCreate", // Create
  ALLOWNAVIGATE: "AllowNavigate",
  ALLOWDELETE: "AllowDelete", // Delete
};
