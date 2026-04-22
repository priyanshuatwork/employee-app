sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/demo/empapp/test/integration/pages/EmployeeList",
	"com/demo/empapp/test/integration/pages/EmployeeObjectPage"
], function (JourneyRunner, EmployeeList, EmployeeObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/demo/empapp') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeeList: EmployeeList,
			onTheEmployeeObjectPage: EmployeeObjectPage
        },
        async: true
    });

    return runner;
});

