export const fixtureRecipes = [
  { id: 1, name: 'Lorem Ipsum', enabled: true },
  { id: 2, name: 'Dolor set amet', enabled: true },
  { id: 3, name: 'Consequitar adipscing', enabled: false },
];

export const fixtureRecipeDict = {};
fixtureRecipes.forEach(recipe => {
  fixtureRecipeDict[recipe.id] = { ...recipe };
});

export const initialState = {
  columns: [{
    label: 'Name',
    slug: 'name',
    enabled: true,
  }, {
    label: 'Action',
    slug: 'action',
    enabled: true,
  }, {
    label: 'Enabled',
    slug: 'enabled',
    enabled: true,
  }, {
    label: 'Channels',
    slug: 'channels',
  }, {
    label: 'Locales',
    slug: 'locales',
  }, {
    label: 'Countries',
    slug: 'countries',
  }, {
    label: 'Start Time',
    slug: 'startTime',
  }, {
    label: 'End Time',
    slug: 'endTime',
  }, {
    label: 'Additional Filters',
    slug: 'additionalFilter',
  }, {
    label: 'Last Updated',
    slug: 'last_updated',
    enabled: true,
  }, {
    label: 'Metadata',
    slug: 'metadata',
    enabled: true,
  }],
  controlApp: {
    isFetching: false,
  },
  filters: {
    list: [],
    active: [],
  },
  form: {},
  notifications: [],
  recipes: {
    entries: {},
    cache: {},
    selectedRecipe: null,
    recipeListNeedsFetch: true,
  },
  routing: {
    locationBeforeTransitions: null,
  },
};

export const fixtureRevisions = [
  {
    id: 169,
    date_created: '2016-05-13T17:20:35.698735Z',
    recipe: {
      id: 36,
      name: 'Consequestar',
      enabled: true,
      revision_id: 22,
      action_name: 'console-log',
      arguments: {
        message: 'hi there message here',
      },
      filter_expression: '()',
      approver: null,
      is_approved: false,
    },
  },
];

export const stubbedFilters = [{
  value: 'status',
  label: 'Status',
  multiple: false,
  options: [{
    label: 'Enabled',
    value: 'enabled',
  }, {
    label: 'Disabled',
    value: 'disabled',
  }],
}];

export const multiStubbedFilters = [{
  value: 'status',
  label: 'Status',
  multiple: false,
  options: [{
    label: 'Enabled',
    value: 'enabled',
  }, {
    label: 'Disabled',
    value: 'disabled',
  }],
}, {
  value: 'countries',
  label: 'Countries',
  multiple: true,
  options: [{
    label: 'United States',
    value: 'US',
  }, {
    label: 'Canada',
    value: 'CA',
  }, {
    label: 'Russia',
    value: 'RU',
  }],
}];
