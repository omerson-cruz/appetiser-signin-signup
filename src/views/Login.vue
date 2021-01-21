<template>
     <v-container>
      <v-row
        class="flex flex-row
        align-center
        justify-center
        align-sm-center
        welcome-container"
        >
          <v-col
            sm="6"
          >
            <div class="mt-10">
            <v-card
            elevation="2"
            shaped
            min-height="300px"
            style="position: relative"
            >
                <div>
                <v-row class="flex flex-row
                    align-center
                    justify-center
                    align-sm-center
                    ">
                  <v-col sm="6">
                  <v-list-item two-line>
                    <v-list-item-avatar>
                      <v-img
                      alt="Vuetify Name"
                      contain
                      min-width="100"
                      src="https://jobio-prd-s3.s3-ap-southeast-1.amazonaws.com/poster-photo/26522-29287-prd.png"
                      width="100"
                      />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="text-h6">Appetiser Sign Up</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  </v-col>
              </v-row>
              </div>



            <!-- LOGIN FORM -->
                <v-form
                  @submit.prevent="handleSignInUser"
                  v-model="isFormValid"
                  lazy-validation
                  ref="form"
                  class="px-12 pb-3"

                >

                      <v-row>
                        <v-col sm="12" md="12" lg="12">
                        <v-text-field
                        v-model="email"
                        prepend-icon="mdi-mail"
                        label="Email"
                        type="email"
                        required
                        :rules="emailRules"
                        >
                        </v-text-field>
                      </v-col>
                      </v-row>

                      <v-row>
                        <v-col sm="12" md="12" lg="12">
                          <v-text-field
                          v-model="password"
                          prepend-icon="mdi-key"
                          label="Password"
                          type="password"
                          required
                          :rules="passwordRules"
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>

                      <v-row class="align-center align-sm-center flex flex-column flex-sm-row justify-center" no-gutters>
                        <v-col sm="12" cols="6" class="text-sm-center">
                          <v-btn
                            color="accent"
                            type="submit"
                            :loading="loading"
                            :disabled="!isFormValid"
                          >
                            Signin
                          </v-btn>

                        </v-col>
                        <v-col cols="6" >
                          <h4 class="my-3 text-sm-center">
                            Don't have an account
                            <router-link to="/register">Sign Up</router-link>
                          </h4>
                        </v-col>
                      </v-row>
                </v-form>

            </v-card>
          </div>
          </v-col>
      </v-row>
      </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,

      isFormValid: true,
      email: "",
      password: "",
      // Vuetify Form validation
      emailRules: [
        (email) => {
          return !!email || "Email is required";
        },
        // using Regular Expression in input validation
        (email) => /.@+./.test(email) || "Email must be valid",
      ],
      passwordRules: [
        // double bang (!!) means to convert into boolean whatever the value of password
        // and then if it is truee then arrow function will evaulate to the true value
        // of !!password. IF false then it will return the value of the String after the || OR operator
        (password) => !!password || "Password is required",
        // Make sure password is at least 7 characters
        (password) =>
          password.length >= 7 || "Password should be more than 7 characters",
      ],
    };
  },
}
</script>

<style scoped>
.welcome-container {
    min-height: 100vh;
}

/* .welcome-content {
    display: inline-block;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
} */
</style>,