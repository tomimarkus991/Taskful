import React from "react";

const Api = () => {
  let jsonRegister = {
    name: "Peeter",
    email: "peeter@gmail.com",
    password: "password",
  };
  let jsonLogin = {
    email: "peeter@gmail.com",
    password: "password",
  };
  let jsonCreateTask = {
    title: "Play video games",
    description: "Play Mario Kart",
    type: "Important",
  };
  let jsonUpdateTask = {
    description: "Play R6",
  };
  var jsonRegisterStr = JSON.stringify(jsonRegister);
  var jsonLoginStr = JSON.stringify(jsonLogin);
  var jsonCreateTaskStr = JSON.stringify(jsonCreateTask);
  var jsonUpdateTaskStr = JSON.stringify(jsonUpdateTask);
  return (
    <div>
      <div>
        <h1>About this API</h1>
        <p className="my-1">
          This is a REST API for Creating, Deleting, Updating, Getting Tasks &
          Registering, Logging, Authenticating Users
        </p>
        <p className="bg-dark p">
          <strong>Version:</strong> 1.0.0
        </p>
      </div>

      {/* Tasks */}
      <section>
        <h2 className="my-2 text-left">Tasks</h2>

        <div class="devsite-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>HTTP request</th>
                <th>Headers</th>
                <th>Description</th>
                <th>Body-RAW</th>
              </tr>
            </thead>
            <tbody>
              <tr class="alt">
                <td colspan="3">
                  URIs relative to https://taskful.herokuapp.com
                </td>
              </tr>

              <tr>
                <td>
                  <a href="/api/tasks">Get all Users Tasks</a>
                </td>
                <td>
                  <code translate="no" dir="ltr">
                    <span>GET&nbsp; /</span>
                    <var class="apiparam">
                      <span>api</span>
                    </var>
                    <span>/tasks</span>
                  </code>
                </td>
                <td>x-auth-token</td>
                <td>Gets all Users Tasks with Token</td>
              </tr>

              <tr>
                <td>
                  <a href="/api/tasks">Create a Task</a>
                </td>
                <td>
                  <code translate="no" dir="ltr">
                    <span>POST&nbsp; /</span>
                    <var class="apiparam">
                      <span>api</span>
                    </var>
                    <span>/tasks</span>
                  </code>
                </td>
                <td>x-auth-token & Content-Type: application/json</td>
                <td>Create a Task for a speific user using the token</td>
                <td>{jsonCreateTaskStr}</td>
              </tr>

              <tr>
                <td>
                  <a href="/api/tasks/:id">Update a Task</a>
                </td>
                <td>
                  <code translate="no" dir="ltr">
                    <span>PUT&nbsp; /</span>
                    <var class="apiparam">
                      <span>api</span>
                    </var>
                    <span>/tasks</span>
                    <span>/:id</span>
                  </code>
                </td>
                <td>x-auth-token & Content-Type: application/json</td>
                <td>Update a Task using the Tasks ID</td>
                <td>{jsonUpdateTaskStr}</td>
              </tr>

              <tr>
                <td>
                  <a href="/api/tasks/:id">Delete a Task</a>
                </td>
                <td>
                  <code translate="no" dir="ltr">
                    <span>DEL&nbsp; /</span>
                    <var class="apiparam">
                      <span>api</span>
                    </var>
                    <span>/tasks</span>
                    <span>/:id</span>
                  </code>
                </td>
                <td>x-auth-token & Content-Type: application/json</td>
                <td>Delete a Task using the Tasks ID</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Users */}
      <section>
        <h2 className="my-2 text-left">Users</h2>

        <div class="devsite-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>HTTP request</th>
                <th>Headers</th>
                <th>Description</th>
                <th>Body-RAW</th>
              </tr>
            </thead>
            <tbody>
              <tr class="alt">
                <td colspan="3">
                  URIs relative to https://taskful.herokuapp.com/login
                </td>
              </tr>

              <tr>
                <td>
                  <a href="/api/users">Register User</a>
                </td>
                <td>
                  <code translate="no" dir="ltr">
                    <span>POST&nbsp; /</span>
                    <var class="apiparam">
                      <span>api</span>
                    </var>
                    <span>/users</span>
                  </code>
                </td>
                <td>Content-Type: application/json</td>
                <td>Register an user and get a token</td>
                <td>{jsonRegisterStr}</td>
              </tr>

              <tr>
                <td>
                  <a href="/api/auth">Login User</a>
                </td>
                <td>
                  <code translate="no" dir="ltr">
                    <span>POST&nbsp; /</span>
                    <var class="apiparam">
                      <span>api</span>
                    </var>
                    <span>/auth</span>
                  </code>
                </td>
                <td>Content-Type: application/json</td>
                <td>Authenticates the User and Gets the Token</td>
                <td>{jsonLoginStr}</td>
              </tr>

              <tr>
                <td>
                  <a href="/api/auth">Authenticate logged in User</a>
                </td>
                <td>
                  <code translate="no" dir="ltr">
                    <span>GET&nbsp; /</span>
                    <var class="apiparam">
                      <span>api</span>
                    </var>
                    <span>/auth</span>
                  </code>
                </td>
                <td>x-auth-token</td>
                <td>
                  If you log in it will check if the user matches using the
                  token
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Api;
