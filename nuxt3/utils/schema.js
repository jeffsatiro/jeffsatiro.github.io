import _ from "lodash";

const defaultData = (options) => {
  return _.merge(
    {
      collection: "",
      model: { id: false, name: "" },
      options: {
        singular: "",
        plural: "",
        datatable: {
          headers: [{ title: "Title", key: "name" }],
        },
      },
    },
    options
  );
};

export default {
  page: defaultData({
    collection: "page",
    model: {
      id: false,
      name: "",
      slug: "",
      compoments: [],
    },
    options: {
      singular: "Page",
      plural: "Pages",
      datatable: {
        headers: [
          { title: "Title", key: "name" },
          { title: "Slug", key: "slug" },
        ],
      },
    },
  }),
  test: defaultData({
    collection: "test",
    model: {
      id: false,
      name: "",
      level: "user",
      permissions: [],
    },
    // events: [
    //   [
    //     "saved",
    //     () => {
    //       test.resetData();
    //       test.search.submit();
    //     },
    //   ],
    //   ["deleted", () => test.search.submit()],
    // ],
    options: {
      singular: "Test",
      plural: "Tests",
      datatable: {
        headers: [
          { title: "Name", key: "name" },
          { title: "Level", key: "level" },
          { title: "Permissions", key: "permissions" },
        ],
      },
      levels: [
        { value: "user", title: "User" },
        { value: "admin", title: "Admin" },
      ],
      permissions: [
        { value: "posts:create", title: "Create Posts" },
        { value: "posts:update", title: "Update Posts" },
        { value: "posts:delete", title: "Delete Posts" },
      ],
    },
  }),
};
