


export var filtersettings = {
  delete: {
    confirmDelete: true,
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  },
  edit: {
    confirmSave: true,
    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  },
  columns: {
    id: {
      title: 'ID',
      width: '10%'
    },
    category: {
      title: 'Full Name'
    },
    companyName: {
      title: 'Company Name',
    },
    jobType: {
      title: 'Job Type',
    },
    city: {
      title: 'City'
    },
    approve: {
      title: 'Approve',
      filter: false,
      type: 'checkbox',
      config: {
        true: 'Yes',
        false: 'No',
      },
    }
  },
  attr: {
    class: "table table-responsive"
  },
  actions: {
    width:'25%',
    add: false
  },
};

