<template>
    <v-stepper-content step="1">
        <v-form v-model="valid">
          <v-container>
            <v-layout>
              <v-flex
                xs12
                md4
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  label="First name"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex
                xs12
                md4
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  label="Last name"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex
                xs12
                md4
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
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
</template>
<script>
    export default {
        props: ['e1'],
        data(){
            return{
                
            }
        }
    }
</script>

