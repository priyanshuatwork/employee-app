sap.ui.define([
  "sap/ui/core/mvc/ControllerExtension"
], function (ControllerExtension) {
  "use strict";

  return ControllerExtension.extend("com.demo.customerwala.ext.controller.ListReportExt", {
    onOpenCustomers: function () {
      window.location.href = "https://port5000-workspaces-ws-2u4ga.ap21.trial.applicationstudio.cloud.sap/customers/webapp/index.html?sap-ui-xx-viewCache=false";
    }
  });
});