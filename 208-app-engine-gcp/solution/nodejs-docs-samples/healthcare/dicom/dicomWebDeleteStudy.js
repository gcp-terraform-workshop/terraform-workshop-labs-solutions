// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable no-warning-comments */

'use strict';

const main = (
  projectId = process.env.GCLOUD_PROJECT,
  cloudRegion = 'us-central1',
  datasetId,
  dicomStoreId,
  studyUid
) => {
  // [START healthcare_dicomweb_delete_study]
  const {google} = require('googleapis');
  const healthcare = google.healthcare('v1');

  const dicomWebDeleteStudy = async () => {
    const auth = await google.auth.getClient({
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    google.options({auth});

    // TODO(developer): uncomment these lines before running the sample
    // const cloudRegion = 'us-central1';
    // const projectId = 'adjective-noun-123';
    // const datasetId = 'my-dataset';
    // const dicomStoreId = 'my-dicom-store';
    // const studyUid = '1.3.6.1.4.1.5062.55.1.2270943358.716200484.1363785608958.61.0';
    const parent = `projects/${projectId}/locations/${cloudRegion}/datasets/${datasetId}/dicomStores/${dicomStoreId}`;
    const dicomWebPath = `studies/${studyUid}`;
    const request = {parent, dicomWebPath};

    await healthcare.projects.locations.datasets.dicomStores.studies.delete(
      request
    );
    console.log('Deleted DICOM study');
  };

  dicomWebDeleteStudy();
  // [END healthcare_dicomweb_delete_study]
};

// node dicomWebDeleteStudy.js <projectId> <cloudRegion> <datasetId> <dicomStoreId> <studyUid>
main(...process.argv.slice(2));
