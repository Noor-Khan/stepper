

<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Enter Data 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">View Document 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Sign Document 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <div class="main-heading">
          <h2>Please fill in the following information </h2>
        </div>
        <v-form v-model="valid">
          <v-container class="bio-inputs">
            <div class="sub-heading">
              <h3>Personal details</h3>
            </div>
            <v-layout>
              <v-flex xs12 md6>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6>
                <v-text-field
                  v-model="surname"
                  :rules="nameRules"
                  label="Surname"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12 md6>
                <v-text-field
                  v-model="company"
                  :rules="companyRules"
                  label="Company"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container class="check-boxes">
            <div class="sub-heading">
              <h3>Do you understand how to create a template?</h3>
            </div>
            <v-checkbox label="I understand" v-model="checkbox1"></v-checkbox>
            <v-checkbox label="I don't understand" v-model="checkbox2"></v-checkbox>
          </v-container>
          <v-container class="select-boxes">
            <div class="sub-heading">
                <h3>Purchase options</h3>
            </div>
            <v-layout wrap align-center>
              <v-flex xs12 sm6 d-flex>
                <v-select
                  :items="items"
                  label="Type 1"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 d-flex>
                <v-select
                  :items="items"
                  label="Type 2"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-container class="view-document">
          <v-data-table
          hide-actions
          :headers="headers"
          :items="desserts"
          class="elevation-1"
  >
            <template slot="items" slot-scope="props">
              <td>{{ name }}</td>
              <td>{{ surname }}</td>
              <td>{{ company }}</td>
              <td>{{ email }}</td>
            </template>
          </v-data-table>
          <div class="middle-text">
            <h2>Hereby declares to understand to create a sign Online template</h2>
            <h3>I would like to Purchase:</h3>
          </div>
          <v-data-table
          hide-actions
          :headers="headers2"
          :items="desserts2"
          class="elevation-1"
  >
            <template slot="items" slot-scope="props">
              <td>{{ name }}</td>
              <td>{{ email }}</td>
            </template>
          </v-data-table>
          <br />
          <v-data-table
          hide-actions
          :headers="headers3"
          :items="desserts3"
          class="elevation-1"
  >
            <template slot="items" slot-scope="props">
              <td>{{ name }}</td>
              <td>{{ email }}</td>
            </template>
          </v-data-table>
        </v-container>
        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
  export default {
    data () {
      return {
        e1: 0,
        valid: false,
        name: '',
        surname: '',
        company: '',
        checkbox1: true,
        checkbox2: false,
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        companyRules: [
          v => !!v || 'Company name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Surname', 
            value: 'Surname', 
            align: 'left',
            sortable: false
          },
          { text: 'Company', value: 'Company',
            align: 'left',
            sortable: false, },
          { text: 'Email', value: 'Email',
            align: 'left',
            sortable: false, }
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
          }
        ],
        headers2: [
          {
            text: 'Type',
            align: 'left',
            sortable: false,
            value: 'Type'
          },
          { text: 'Type', 
            value: 'Type', 
            align: 'left',
            sortable: false
          }
        ],
        desserts3: [
          {
            name: 'Frozen Yogurt',
          }
        ],
        headers3: [
          {
            text: 'Price',
            align: 'left',
            sortable: false,
            value: 'Price'
          },
          { text: 'Price', 
            value: 'Price', 
            align: 'left',
            sortable: false
          }
        ],
        desserts2: [
          {
            name: 'Frozen Yogurt',
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .middle-text{
    margin: 20px 0;
  }
  .check-boxes{
    text-align: left;
  }
  .v-input--checkbox{
    display: inline-block;
    margin-right: 20px;
  }
  .sub-heading{
    text-align: left;
  }
  .view-document{
    text-align: left;
  }
  .view-document ul li{
    list-style-type: none;
  }
</style>
