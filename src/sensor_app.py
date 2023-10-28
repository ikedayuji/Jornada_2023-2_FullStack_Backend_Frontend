from flask import Flask, jsonify

app = Flask(__name)

@app.route('/api/get_data', methods=['GET'])
def get_data():

    data = [{'field1': item['field1'], 'field2': item['field2']} for item in collection_files]

    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
