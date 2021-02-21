import os
# import pymongo
import json
import random
import psycopg2




def connector():
    # cockroachstring = "dbname='wet-dingo-838.defaultdb' user='muntaser' password='rootpassword' host='free-tier.gcp-us-central1.cockroachlabs.cloud' port='26257'"
    cockroachstring = os.environ.get('COCKROACHSTR')
    conn=psycopg2.connect(cockroachstring)
    return conn



def initialize(conn):
    with conn.cursor() as cur:
        cur.execute(
            "CREATE TABLE IF NOT EXISTS restaurants (id INT PRIMARY KEY, name STRING, address STRING, city STRING, capacity STRING, leftover STRING)"
        )
        cur.execute(
            "CREATE TABLE IF NOT EXISTS waitlists (id INT PRIMARY KEY, name STRING, phone STRING, partysize STRING, waittime STRING, restaurantid STRING)"
        )
        # cur.execute("UPSERT INTO users (id, email, userpassword, usertype, name) VALUES (1, 'jon@fisherman.com', 'password1', 'fisherman', 'jon stewart'), (2, 'joe@gmail.com', 'password1', 'customer', 'joe someone')")
        # logging.debug("create_accounts(): status message: %s", cur.statusmessage)
    conn.commit()






def add_waitlist(conn, pname, phone, partysize, rid):
    with conn.cursor() as cur:
        wtime = 5
        cur.execute("SELECT id, restaurantid FROM waitlists")
        # logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        # print(f"Balances at {time.asctime()}:")
        i = 1
        for row in rows:
            i = i + 1
            if row[1] == rid:
                wtime +=5
        i = str(i)
        
        cur.execute("UPSERT INTO waitlists (id, name, phone, partysize, waittime, restaurantid) VALUES (" + i +", '" + pname + "', '" + phone + "', '" + partysize +"', '" + str(wtime) + "', '" + rid +"')")
        # logging.debug("create_accounts(): status message: %s", cur.statusmessage)
    conn.commit()
    return i, str(wtime)


def getwaitlist(conn, rid):
    with conn.cursor() as cur:
        cur.execute("SELECT id, name, phone, partysize, waittime, restaurantid FROM waitlists")
        # logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        # print(f"Balances at {time.asctime()}:")
        parties = []
        for row in rows:
            if row[5] != rid:
                continue
            party = {}
            party['id'] = row[0]
            party['name'] = row[1]
            party['phone'] = row[2]
            party['partysize'] = row[3]
            party['waittime'] = row[4]

            parties.append(party)

        return parties

def restaurantsfood(conn, city):
    with conn.cursor() as cur:
        cur.execute("SELECT id, name, address, city, capacity, leftover FROM restaurants")
        # logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        # print(f"Balances at {time.asctime()}:")
        res = []
        for row in rows:
            l = int(row[5])
            if l < 1:
                continue
            if row[3] != city:
                continue
            party = {}
            party['id'] = row[0]
            party['name'] = row[1]
            party['address'] = row[2]
            party['city'] = row[3]
            party['capacity'] = row[4]
            party['leftover'] = row[5]
            

            res.append(party)

        return res



def add_places(conn, pname, paddress, city, capacity, leftover):
    with conn.cursor() as cur:
        cur.execute("SELECT id FROM restaurants")
        # logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        # print(f"Balances at {time.asctime()}:")
        i = 1
        for row in rows:
            i = i + 1
        i = str(i)
        
        cur.execute("UPSERT INTO restaurants (id, name, address, city, capacity, leftover) VALUES (" + i +", '" + pname + "', '" + paddress + "', '" + city +"', '" + capacity + "', '" + leftover +"')")
        # logging.debug("create_accounts(): status message: %s", cur.statusmessage)
    conn.commit()
    return i


def add_users(conn, uname, pw, utype, uemail, lat, lon, uaddress):
    with conn.cursor() as cur:
        cur.execute("SELECT id FROM users")
        # logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        # print(f"Balances at {time.asctime()}:")
        i = 1
        for row in rows:
            i = i + 1
        i = str(i)
        
        cur.execute("UPSERT INTO users (id, email, userpassword, usertype, username, lat, lon, useraddress) VALUES (" + i +", '" + uemail + "', '" + pw + "', '" + utype +"', '" + uname + "', '" + lat +"', '" + lon +"', '" + uaddress +"')")
        # logging.debug("create_accounts(): status message: %s", cur.statusmessage)
    conn.commit()
    return i
    # print ("user added")


def login(conn, uemail, pw):
    with conn.cursor() as cur:
        cur.execute("SELECT id, email, userpassword, usertype, username FROM users")
        # logging.debug("print_balances(): status message: %s", cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        # print(f"Balances at {time.asctime()}:")
        for row in rows:
            # print(row)
            # print (type(row))
            if row[1] == uemail and row[2] == pw:
                # print ("found")
                return True, row[0], row[3], row[4]
        return False, 'none', 'none', '-1'

def delete_users(conn):
    with conn.cursor() as cur:
        cur.execute("DELETE FROM defaultdb.users")
        # logging.debug("delete_accounts(): status message: %s", cur.statusmessage)
    conn.commit()
    with conn.cursor() as cur:
        cur.execute("DROP TABLE users")
        # logging.debug("delete_accounts(): status message: %s", cur.statusmessage)
    conn.commit()

    print ("users table deleted")


def purgedb(conn):
    with conn.cursor() as cur:
        cur.execute("DELETE FROM defaultdb.users")
        # logging.debug("delete_accounts(): status message: %s", cur.statusmessage)
    conn.commit()
    with conn.cursor() as cur:
        cur.execute("DROP TABLE users")
        # logging.debug("delete_accounts(): status message: %s", cur.statusmessage)
    conn.commit()

    print ("users table deleted")



def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }

    request_json = request.get_json()
    conn = connector()
    initialize(conn)

    retjson = {}

    action = request_json['action']

    if action == "addtowaitlist" :
        pname = request_json['name']
        phone = request_json['phone']
        partysize = request_json['partysize']
        rid = request_json['rid']

        wid, wt = add_waitlist(conn, pname, phone, partysize, rid)


        retjson['status'] = "successfully added"
        retjson['id'] = wid
        retjson['waittime'] = wt

        return json.dumps(retjson)

    if action == "createwaitlist" :
        pname = request_json['name']
        paddress = request_json['address']
        city = request_json['city']
        capacity = request_json['capacity']
        leftover = request_json['leftover']

        pid = add_places(conn, pname, paddress, city, capacity, leftover)

        retjson['status'] = "successfully added"
        retjson['id'] = pid

        return json.dumps(retjson)

    if action == 'getwaitlist':
        rid = request_json['rid']
        res = getwaitlist(conn, rid)

        retjson['parties'] = res

        return json.dumps(retjson)


    if action == 'getfood':
        city = request_json['city']
        res = restaurantsfood(conn, city)

        retjson['restaurants'] = res

        return json.dumps(retjson)




    if action == 'login':
        uemail = request_json['email']
        pw = request_json['password']

        res = login(conn, uemail, pw)

        retjson['status'] = str(res[0])
        retjson['id'] = str(res[1])

        return json.dumps(retjson)


    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
